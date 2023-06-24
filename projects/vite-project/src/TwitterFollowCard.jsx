import { useState, userState } from 'react'

export function TwitterFollowCard({ children, formatUsername, userName = "Unknown", innitialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(innitialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const imageSrc = `https://unavatar.io/twitter/${userName}`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={imageSrc} alt="Avatar"/>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span>{formatUsername(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}