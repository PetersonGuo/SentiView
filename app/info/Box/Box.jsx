import {motion} from "framer-motion";
import "./Box.css";
import "../../globals.css";
import {MdOutlineClose} from "react-icons/md";

function Box(props) {
    return (
        <div className="w-full h-full mt-auto mb-auto">
            <div className="h-full box flex border-2 border-solid border-[#FFD178]">
                <div className="gradient self-start flex items-center">
                    {props.title !== 'Positive' && props.title !== "Negative" && (<span
                        className="float-right font-bold text-[#FFD178] hover:text-[#FFD178] hover:no-underline hover:cursor-pointer ml-10 absolute">
                        <MdOutlineClose
                            onClick={() =>
                                props.setModalOpen(false)
                            }
                            className="w-14 h-14"
                        />
                    </span>)}
                    <h2 className="title-text mx-auto">
                        {props.title}
                    </h2>
                </div>
                {!props.loading ? (
                    <div
                        className="flex flex-col h-full justify-center overflow-y-scroll overflow-x-hidden">
                        {props.children}
                    </div>
                ) : (
                    <img
                        className={"m-auto"}
                        src={"/loading.gif"}
                        alt={"Loading..."}
                        width={50}
                    />
                )}
            </div>
        </div>
    )
        ;
}

export default Box;
