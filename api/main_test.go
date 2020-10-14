package main

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestServerDeploy(t *testing.T) {
	router := setupRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/ping", nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	assert.Equal(t, "ping ok", w.Body.String())
}

func TestServerTask(t *testing.T) {
	router := setupRouter()
	assert := assert.New(t)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/task/Corewar", nil)
	router.ServeHTTP(w, req)

	assert.Equal(http.StatusOK, w.Code)
	assert.Equal("project name : Corewar", w.Body.String())
}
