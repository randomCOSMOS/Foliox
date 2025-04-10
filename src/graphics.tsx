import React from "react";
import { CustomComponent } from "payload";

export const Icon: CustomComponent = () => <img className="icon" src="/foliox-char.png" alt="foliox" />;

export const Logo: CustomComponent = () => {
    return (
        <div className="logo">
            <img src="/foliox-transparent.png" alt="foliox" />
        </div>
    );
}