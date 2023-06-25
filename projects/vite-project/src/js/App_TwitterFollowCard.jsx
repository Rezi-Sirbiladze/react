import '../css/App_TwitterFollowCard.css'
import { TwitterFollowCard } from '../components/TwitterFollowCard'

const users = [
    {
        id_user: 1,
        name: 'Miguel Ángel Durán',
        userName: 'midudev',
        innitialIsFollowing: true
    },
    {
        id_user: 2,
        name: 'Pablo Hernandez',
        userName: 'pheraib',
        innitialIsFollowing: false
    },
    {
        id_user: 3,
        name: 'Elon Musk',
        userName: 'elonmusk',
        innitialIsFollowing: true
    },
    {
        id_user: 4,
        name: 'Vanderhart',
        userName: 'vxnder',
        innitialIsFollowing: false
    },
]

export function App_TwitterFollowCard() {

    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
            {
                users.map(({ id_user, name, userName, innitialIsFollowing }) => (
                    <TwitterFollowCard
                        key={id_user}
                        formatUsername={format}
                        userName={userName}
                        innitialIsFollowing={innitialIsFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}