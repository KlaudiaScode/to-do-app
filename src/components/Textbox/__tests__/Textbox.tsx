import React from 'react';
import {render, screen,} from '@testing-library/react';
import Textbox from '../Textbox';

describe ('<Textbox />', ()=>{
    it ('should render the component', ()=>{
        render(<Textbox onChangeHandler={jest.fn()} value={''}/>)

        expect(screen.getByPlaceholderText('Task content..')).toBeInTheDocument()
    })

})