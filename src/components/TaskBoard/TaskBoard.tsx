import React from 'react';
import { useHistory } from 'react-router-dom';
import { BoxProject } from '../BoxProject/BoxProject';
import './TaskBoard.scss';

const STYLE = ["task--primary"];
const SIZE = ["task--medium", 'task--small'];
const COLOR = ["task--color-primary", "task--color-blue", "task--color-green", "task--color-outline"];

interface IPropsTask {
    children?: string;
    taskStyle?: string;
    taskColor?: string;
    taskSize?: string;
    title: string;
    type?: string;
    data?: any;
}

export const TaskBoard = ({
    children,
    taskStyle,
    taskColor,
    taskSize,
    title,
    type,
    data,
}: IPropsTask) => {
    taskStyle = taskStyle === undefined ? "task--primary" : taskStyle;
    taskColor = taskColor === undefined ? "task--medium" : taskColor;
    taskSize = taskSize === undefined ? "task--color-primary" : taskSize;

    const checkTaskStyle = STYLE.includes(taskStyle) ? taskStyle : "task--primary";
    const checkTaskSize = SIZE.includes(taskSize) ? taskSize : "task--medium";
    const checkTaskColor = COLOR.includes(taskColor) ? taskColor : "task--color-primary";
    const history = useHistory();

    const onClickBoxProject = (title:  string) => {
        history.push(`/project/board/${title}`);
    }

    return (
        <div className={`task ${checkTaskStyle} ${checkTaskSize} ${checkTaskColor}`}>
            <div className="task--title">
                <p>{title}</p>
            </div>
            {type === "task--list" && 
                <div>
                    {data.projects.map((item: any, i: number) => {
                                return (
                                    <div style={{marginRight: "5%", marginLeft: "1%"}}>
                                        <BoxProject title={item.name} boxProjectSize="boxPr--task--md" onClick={() => {
                                            onClickBoxProject(item.name)
                                        }} />
                                    </div>
                                )
                    })}
                </div>
            }
        </div>
    )
}
