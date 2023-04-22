import React, {useState} from 'react';
import classNames from 'classnames';

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const tabClassName = (index) => classNames("flex-row tabs w-1/3 h-full", { "bg-white" : toggleState === index }, { "bg-rose-500": toggleState !== index });

    const content = (index) => classNames("content bg-white", { "active-content": toggleState === index }, { "hidden": toggleState !== index });

    return (
        <div className="container border w-1/2 h-[300px] m-auto rounded bg-white">
            <div className="tabs h-[40px] w-full rounded-t">
                <button className={tabClassName(1)} onClick={() => toggleTab(1)}>Tab 1</button>
                <button className={tabClassName(2)} onClick={() => toggleTab(2)}>Tab 2</button>
                <button className={tabClassName(3)} onClick={() => toggleTab(3)}>Tab 3</button>
            </div>
            <div className="tabContent">
                <div className={content(1)}>
                    <hr />
                    <p className="bg-white">This is tab 1
                    </p>
                </div>
                <div className={content(2)}>
                    <hr />
                    <p className="bg-white">This is tab 2</p>
                </div>
                <div className={content(3)}>
                    <hr />
                    <p className="bg-white">This is tab 3</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;