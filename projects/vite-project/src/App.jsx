import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUsername={format}
                userName="midudev"
                isFollowing={true}>
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard
                formatUsername={format}
                userName="pheraib"
                isFollowing={false}>
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard
                formatUsername={format}
                userName="elonmusk"
                isFollowing>
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard
                formatUsername={format}
                userName="vxnder"
                isFollowing={false}>
                Vanderhart
            </TwitterFollowCard>
        </section>
    )
}