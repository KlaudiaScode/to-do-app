import React from 'react';
import {render, screen, waitFor, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskCreator from '../TaskCreator';

const user= userEvent.setup();

describe ('<TaskCreator />', ()=>{
    it ('should render the components', ()=>{
        render(<TaskCreator addTask={jest.fn()}/>);

        expect (screen.getByRole('textbox')).toHaveValue('');
        expect (screen.getByRole('button',{name:'Add new task'})).toBeInTheDocument();
    });

    it('should update text field value if user types', async ()=>{
        render(<TaskCreator addTask={jest.fn()}/>);

        expect (screen.getByRole('textbox')).toHaveValue('');

        await act( async ()=>{
            await user.type(screen.getByRole('textbox'), 'a');
        });

        await waitFor(()=>expect (screen.getByRole('textbox')).toHaveValue('a'));
    });

    it('should fire addTask on click event', async ()=>{
        const addTask = jest.fn();

        render(<TaskCreator addTask={addTask}/>);

        expect(addTask).toHaveBeenCalledTimes(0);

        await act( async ()=>{
            await user.type(screen.getByRole('textbox'), 'walk');
        });

        await user.click(screen.getByRole('button',{name:'Add new task'}));

        expect (addTask).toHaveBeenCalledTimes(1);

        expect(addTask).toHaveBeenCalledWith('walk');
    })
});

