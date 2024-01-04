import {Color} from "../../types/Color";

export interface IWhiteLabel {
    mainColor: Color;
    hoverColor: Color;
    activeColor: Color;
    lightColor: Color;
    darkColor: Color;
}

class WhiteLabel implements IWhiteLabel {
    mainColor = 'blue-400';
    hoverColor = 'blue-500';
    activeColor = 'blue-600';
    lightColor = 'white';
    darkColor = 'black';

    public getMainBgColor = () => `bg-${this.mainColor}`;

    public getHoverBgColor = () => `bg-${this.hoverColor}`;

    public getActiveBgColor = () => `bg-${this.activeColor}`;

    public getLightTextColor = () => `text-${this.lightColor}`;

    public getDarkTextColor = () => `text-${this.darkColor}`;

    public getLightBgColor = () => `bg-${this.lightColor}`;

    public getDarkBgColor = () => `bg-${this.darkColor}`;
}

export default new WhiteLabel();
