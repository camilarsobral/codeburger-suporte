import styled from 'styled-components'

export const Container = styled.div`
    background: #e5e5e5;
    min-height: calc(100vh - 72px);
`


export const ProductsImg = styled.img`
    width: 100%;
    
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
    
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${props => props.isActiveCategory ? '#9758A6' : '#9A9A9D'};
    font-size: 17px;
    font-weight: ${props => props.isActiveCategory ? 'bold' : 'normal'};
    line-height: 20px;

`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 50px;
    justify-items: center;
    margin-top: 20px;
`