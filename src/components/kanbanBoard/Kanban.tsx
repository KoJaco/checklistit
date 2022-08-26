type KanbanProps = {
    title: string;
    children: JSX.Element;
};

const Kanban = (props: KanbanProps) => {
    return (
        <div className="flex flex-col bg-gray-50 h-screen w-full">
            <div className="flex flex-col p-2">
                <p className="text-2xl text-left p-2 capitalize">
                    {props.title}
                </p>
            </div>
            <div className="flex justify-between px-4">{props.children}</div>
        </div>
    );
};

export default Kanban;
