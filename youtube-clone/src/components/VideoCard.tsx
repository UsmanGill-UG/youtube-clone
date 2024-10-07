

export function VideoCard(props :any) {
    return (
        <div className="p-2 cursor-pointer">
            <img className="rounded" src={props.thumbnail} alt="thumbnail"/>
            <div className="grid grid-cols-12 pt-2  ">
                <div className="col-span-1">
                    <img className="rounded-full  " src={props.channelimage} alt="profile"/>  
                </div>
                <div className="col-span-11 pl-5">
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-600 text-base">
                        {props.channel}
                    </div>
                    <div className="col-span-11 text-gray-600 text-base    ">
                        {props.views} • {props.date}  
                    </div>
                </div>
      
            </div>
        </div>
    );
}  