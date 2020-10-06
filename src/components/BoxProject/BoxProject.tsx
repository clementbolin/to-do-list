import React from 'react';
import './BoxProject.scss';

const STYLE = ['boxPr--primary'];
const SIZE = ['boxPr--medium', 'boxPr--task--md'];
const COLOR = ['boxPr--color-primary'];

interface IBoxProject {
    children?: any;
    boxProjectStyle?: string;
    boxProjectSize?: string;
    boxProjectColor?: string;
    title?: string;
    onClick?: any;
}

export const BoxProject = ({
    children,
    boxProjectStyle,
    boxProjectSize,
    boxProjectColor,
    title,
    onClick
}: IBoxProject) => {
    boxProjectStyle = boxProjectStyle === undefined ? 'boxPr--primary' : boxProjectStyle;
    boxProjectSize = boxProjectSize === undefined ? 'boxPr--medium' : boxProjectSize;
    boxProjectColor = boxProjectColor === undefined ? 'boxPr--color-primary' : boxProjectColor;

    const checkProjectStyle = STYLE.includes(boxProjectStyle) ? boxProjectStyle : 'boxPr--primary';
    const checkProjectSize = SIZE.includes(boxProjectSize) ? boxProjectSize : 'boxPr--medium';
    const checkProjectColor = COLOR.includes(boxProjectColor) ? boxProjectColor : 'boxPr--color-primary';

    return (
        <div onClick={onClick} className={`boxPr ${checkProjectStyle} ${checkProjectSize} ${checkProjectColor}`}>
            <div className="boxPr--title">
                <p>{title}</p>
            </div>
        </div>
    )
}
