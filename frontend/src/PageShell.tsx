type PageShellProps = {
    eyebrow: string;
    title: string;
    description: string;
    icon: string;
};

export default function PageShell({
    eyebrow,
    title,
    description,
    icon,
}: PageShellProps) {
    return (
        <main className="page-shell">
            <div className="page-shell-header">
                <div>
                    <p className="eyebrow">{eyebrow}</p>
                    <h1>{title}</h1>
                    <p className="page-description">{description}</p>
                </div>

                <div className="page-shell-icon" aria-hidden="true">
                    {icon}
                </div>
            </div>

            <section className="page-shell-content">
                <div className="page-shell-card">
                    <div className="page-shell-card-icon">
                        {icon}
                    </div>

                    <div>
                        <span className="page-shell-status">
                            READY
                        </span>

                        <h2>{title}</h2>

                        <p>
                            This section is part of your Smart Market
                            Watchlist workspace. More functionality will
                            be added in the upcoming phase.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}