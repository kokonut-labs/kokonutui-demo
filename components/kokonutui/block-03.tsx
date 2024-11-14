interface Block03Props {
    children: React.ReactNode;
}

export default function Block03({ children }: Block03Props) {
    return (
        <div className="relative h-screen bg-white dark:bg-zinc-950">
            {children}
        </div>
    );
}
