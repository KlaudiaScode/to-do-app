import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ButtonAdd from '../ButtonAdd';

describe ('<ButtonAdd />', ()=>{
    it ('should render the component', ()=>{
        render(<ButtonAdd onClickHandler={jest.fn()}/>)

        expect (screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByText('Add new task')).toBeInTheDocument()
    })

    it('should fire handleClick on click event', ()=>{
        const onClickHandler = jest.fn()
        render(<ButtonAdd onClickHandler={onClickHandler}/>)

        expect (onClickHandler).toHaveBeenCalledTimes(0)

        fireEvent.click(screen.getByRole('button'))

        expect (onClickHandler).toHaveBeenCalledTimes(1)
    })
})
