import React from 'react'

function MemberCard({member_name,member_img,title}) {
  return (
    <div className="flex flex-col items-center justify-start">
        <div className="relative w-[138px] h-[103px]">
            <div className="absolute top-[0px] left-[0px] w-[138px] h-[103px]">
                <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                <b className="absolute top-[64px] left-[15px]">
                {member_name}
                </b>
                <div className="absolute top-[80px] left-[calc(50%_-_45px)] text-3xs">
                {title}
                </div>
            </div>
            <img
                className="absolute top-[10px] left-[45px] rounded-[300px] w-12 h-12 object-cover"
                alt=""
                src={member_img}
            />
        </div>
        <div className="rounded-[34.21px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] overflow-hidden flex flex-row items-start justify-start p-[6.842105388641357px] mt-[-7px]">
            <img
                className="relative w-[12.3px] h-[12.3px]"
                alt=""
                src="/vector.svg"
            />
        </div>
    </div>
  )
}

export default MemberCard
