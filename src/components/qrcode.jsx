import { useRef, useState } from "react";
import { ImageIcon } from "@phosphor-icons/react";
import { QRCodeCanvas } from "qrcode.react";

export const Qrcode =()=> { 
    const ImageRef = useRef(null)
    const [colour,setColour] = useState("#212a31")
    const [value,setValue] = useState("")
    const [posX,setPosX] = useState()
    const [posY,setPosY] = useState()
    const [AdMargin,setAdMargin] = useState(false)
    const [image,setImage] = useState("https://d1ih8jugeo2m5m.cloudfront.net/2020/11/estrategias-marketing-ecommerce-de-moda.jpg")
    return (
        <div className="h-[450px] w-[850px] rounded-md bg-[#D3D9D4] sm:p-4 flex gap-2">
            <div className="grow flex flex-col gap-2">
                <h1 className="text-montserrat text-2xl text-montserrat-w">
                    QR Code - Generator
                </h1>
                <div className="flex gap-2 flex-col">
                    <div className="border border-2 rounded h-[45px] p-1 flex items-center gap-1">
                        <span className="text-montserrat-w text-montserrat">
                            message
                        </span>
                        <input type="text" onChange={(e)=>setValue(e.target.value)} className=" grow outline-none text-roboto" placeholder="qrcode message Or Link" />
                    </div>
                    <div className="flex items-center border border-2 p-1 rounded">
                        <span className="text-roboto text-xl text">
                            Select the qrcode color                        
                        </span>
                        <input type="color" value={colour} onChange={(e)=>setColour(e.target.value)} />
                    </div>
                    <div className="border-2 flex p-2 gap-3 rounded">
                        <div className="flex flex-col text-montserrat">
                            <span className="text-sm">Position Vertical</span>
                            <input type="range" className="" max={250} onChange={(e)=>setPosY(parseInt(e.target.value))} />
                        </div>
                        <div className="flex flex-col text-montserrat">
                            <span className="text-sm">Position Horizontal</span>
                           <input type="range" max={250} onChange={(e)=>setPosX(parseInt(e.target.value))} />
                        </div>
                    </div>
                    <div onClick={()=>ImageRef.current.click()} className="border-2 cursor-pointer border-dashed flex items-center justify-center h-[100px]">
                        <ImageIcon size={40}/>
                        <span>Image</span>
                        <input type="file" accept="image/*" ref={ImageRef} hidden onChange={(e)=>{
                            if(e.target.files && e.target.files.length > 0){
                                setImage(URL.createObjectURL(e.target.files[0]))
                            }
                        }}/>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 text-roboto">
                            <span>add margin : </span>
                            <input type="checkbox" onClick={()=>setAdMargin(!AdMargin)} />
                        </div>
                    </div>

                </div>
            </div>    
            <div className="grow-2 border rounded flex items-center justify-center">
                {value && 
                <div>
                    <QRCodeCanvas
                    value={value}
                    fgColor={colour}
                    size={200}
                    includeMargin={AdMargin}
                    imageSettings={{
                        src:image,
                        width: 50,
                        height: 50,
                        excavate:true,
                        x:posX,
                        y:posY,
                    }}
                    />
                </div>
                }

            </div> 
        </div>
    );
}
