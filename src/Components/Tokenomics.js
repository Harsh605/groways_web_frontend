import React from "react";
import { useRef } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Token.css";

const Tokenomics = () => {
    const dataMock = [
        { title: "1st ICO 25%", value: 25.0, color: "#32e4ed", titlep: "1st ICO" },
        { title: "2nd ICO   18.75%", value: 18.75, color: "#7c7af0", titlep: "2nd ICO " },
        { title: "Marketing   30.0%", value: 30.0, color: "#7d7af0", titlep: "Marketing" },
        { title: "Founder   10.25%", value: 10.25, color: "#ADD8E6", titlep: "Founder " },
        { title: "Community   10%", value: 10.00, color: "#4169E1", titlep: "Community " },
        { title: "Developer  3%", value: 3.0, color: "#3290ed", titlep: "Developer" },
        { title: "Charity  3%", value: 3.0, color: "#87CEEB", titlep: "Charity" },

    ];
    const dataMock2 = [
        { title: "Token Name", value: "Decentralised Finance Institute", color: "#32e4ed", titlep: "Token Name" },
        { title: "Token Symbol", value: "DFI", color: "#7c7af0", titlep: "Token Symbol" },
        { title: "Total Circulating Supply", value: 18336, color: "#7d7af0", titlep: "Marketing" },
        { title: "Network", value: "ARB", color: "#4169E1", titlep: "Network " },
        { title: "Supply Type", value: "Fixed", color: "#3290ed", titlep: "Supply Type" },

    ];

    const toolTip = useRef(null);
    return (
        <div id="tokenomics" className="bg-transparent py-10 px-14 md:pt-16 md:px-28 sm:p-14  pb-20">

            <h1
                className="bigHeading p-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]"
                style={{ textAlign: "center" }}
            >
                <span className="text-[#ff0000] -translate-x-2/4">
                    {" "}
                    Tokenomics{" "}
                </span>
            </h1>
            <br />
            <div className="customTooltip" ref={toolTip}></div>
            <div className="pi-data tknTop flex justify-center">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-14">
                    <div className="lg:w-1/4 sm:w-full">
                        <p  style={{}} className="text-white text-justify text-lg ">
                            A token named Decentralised Finance Institute ( DFI ) is created with a Fixed supply of 18,336 on the ARB Network. 
                            <br/>  <br/>
                            <div >
                                <div className="flex justify-between " style={{letterSpacing:"1.5px",}}>
                                    <div className="" >Token Symbol :</div>
                                    <div>DFI</div>
                                </div>
                                <div className="flex justify-between" style={{letterSpacing:"1.5px",}}>
                                    <div className="">Total Supply :</div>
                                    <div>18,336</div>
                                </div>
                                <div className="flex justify-between" style={{letterSpacing:"1.5px",}}>
                                    <div className="">Supply Type :</div>
                                    <div>Fixed</div>
                                </div>
                                <div className="flex justify-between" style={{letterSpacing:"1.5px",}}>
                                    <div className="">Network :</div>
                                    <div>ARB</div>
                                </div>
                               
                            </div>
                        </p>
                      
                    </div>
                    <div className="mainPieCgar">
                        <PieChart
                            animationDuration={1000}
                            animate={true}
                            data={dataMock}

                            onMouseOver={(e, index) => {
                                toolTip.innerHTML =
                                    dataMock[index].title + " " + dataMock[index].value + " %";
                                e.target.style.opacity = "0.8";
                                e.target.style.cursor = "pointer";
                                // toolTip.current.style.top = e.pageY + "px";
                                // toolTip.current.style.left = e.pageX + "px";
                                toolTip.current.classList.add("active");
                            }}
                            onMouseOut={(e, index) => {
                                e.target.style.opacity = "1";
                                e.target.style.cursor = "auto";
                                toolTip.current.classList.remove("active");
                            }}
                            lineWidth={45}
                            labelPosition={75}
                        />
                        <p>
                            Total <small>18,336</small>
                        </p>
                    </div>
                    <ul className="ul_data-list">
                        <h5 className="fs-4">Token Pools</h5>
                        {dataMock &&
                            dataMock.map((data, id) => {
                                return (
                                    <li className="fs-5" key={id}>
                                        <div>
                                            <small style={{ background: data.color }}></small>{" "}
                                            {data.titlep}
                                        </div>{" "}
                                        <span>{data.value}%</span>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
