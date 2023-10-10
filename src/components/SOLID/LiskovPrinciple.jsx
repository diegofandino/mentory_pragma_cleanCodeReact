import React from 'react'

const Button = ({children, color, size}) => {
    return <button style={{color, fontSize: size === 'xl' ? '32px' : '16px' }} >{children}</button>
};

const RedButton = ({children, isBig}) => {
    return <Button size={isBig ? 'xl' : 'sm'} color='red'> {children} </Button>
}

export const LiskovPrinciple = () => {
  return (
    /* if this button change for Button that is "father component" it will broken becase redButton change its props */
    <RedButton isBig={true}>
        Botón funcionando
    </RedButton>
  )
}
