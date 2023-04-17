import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
import Person from '../../assets/person.svg'
import Cart from '../../assets/cart.svg'
import { Container, ContainerLeft, Line, PageLink, ContainerRight, PageLinkExit, ContainerText } from './styles'

export function Header() {

    const { logout, userData } = useUser()
    const { push, location: { pathname } } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>

            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('/produtos')}>
                    Ver produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
                    <img src={Cart} alt='carrinho' />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt='pessoa' />
                </PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>
                        Sair
                    </PageLinkExit>
                </ContainerText>
            </ContainerRight>


        </Container>
    )
}