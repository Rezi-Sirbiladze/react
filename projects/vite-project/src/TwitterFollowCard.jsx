export function TwitterFollowCard({ children, formatUsername, userName = "Unknown", isFollowing }) {
    const imageSrc = `https://unavatar.io/twitter/${name}`
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={imageSrc} alt="Avatar" srcset="" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span>{formatUsername(userName)}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}