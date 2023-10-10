import React from 'react'


const ButtonNotOpenClose = ({title}) => {
    return (
        <button> {title} </button>
    );
};

const ButtonWithOpenClose = ({children}) => {
    return (
        <button>
            {children}
        </button>
    );
};
export const OpenCloseButton = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20', padding: '10px 0px'}}>
    {/* button without open close principle */}
    <ButtonNotOpenClose title="NOT OPEN CLOSE ACHIVE" color="red" />
    
    {/* button with open close */}
    <ButtonWithOpenClose>
        Button with open close
    </ButtonWithOpenClose>
    </div>
  )
}
