import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import TaskCreator from '../TaskCreator';


describe ('<TaskCreator />', ()=>{
    it ('should render the components', ()=>{
        render(<TaskCreator addTask={jest.fn()}/>);

        expect (screen.getByRole('textbox')).toBeInTheDocument();
        expect (screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('Add new task')).toBeInTheDocument();
    })
})