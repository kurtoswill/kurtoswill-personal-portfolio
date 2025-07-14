const Background = ({ position = "top" }: { position?: "top" | "bottom" }) => {
    const isTop = position === "top";

    return (
        <div
            className={`absolute left-1/2 size-[1500px] -translate-x-1/2 ${
                isTop ? "-top-[300px] -translate-y-1/2" : "-bottom-[1200px]"
            } z-0
            bg-[radial-gradient(circle_at_50%_60%,#f5e1ff_0%,#c084fc_10%,#9333ea_40%,#02021a_100%)]
            blur-3xl rounded-full`}
        />
    );
};

export default Background;
