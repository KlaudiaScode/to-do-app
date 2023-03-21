import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ButtonDelete from '../ButtonDelete';

describe ('<ButtonDelete />', ()=>{
    it ('should render the component', ()=>{
        render(<ButtonDelete handleClick={jest.fn()}/>);

        expect (screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByTestId('DeleteIcon')).toBeInTheDocument();
    });

    it('should fire handleClick on click event', ()=>{
        const handleClick = jest.fn();
        render(<ButtonDelete handleClick={handleClick}/>);

        expect (handleClick).toHaveBeenCalledTimes(0);

        fireEvent.click(screen.getByRole('button'));

        expect (handleClick).toHaveBeenCalledTimes(1);
    });
});
