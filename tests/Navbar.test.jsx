import { it, expect, describe } from 'vitest'
import "@testing-library/jest-dom/vitest"
import {getByRole, queryAllByRole, queryByRole, render,screen} from '@testing-library/react'
import Navbar from '../src/components/GeneralComponents/Navbar'
import { MemoryRouter } from 'react-router-dom';
import { ThemeContext,ThemeProvider } from '../src/useContext/context'
import userEvent from '@testing-library/user-event';

describe('Navbar', () => {
    //If you want to test a componenet that uses useContext you have to wrap it around the context

    it('should have heading OA', () => {
        const mockTheme = {theme: "light"}
        render(
        <ThemeProvider >
        <MemoryRouter initialEntries={['/']}>
        <Navbar/>
        </MemoryRouter>
        </ThemeProvider>
    )
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/OA/i)
        expect(heading).toHaveStyle({
            color: '#111827',
        })
    })

    it('should change the theme when clicked by the user', async() => {
        render(
            <ThemeProvider >
            <MemoryRouter initialEntries={['/']}>
            <Navbar/>
            </MemoryRouter>
            </ThemeProvider>
        )
        const user = userEvent.setup()
        const figure = screen.queryAllByRole('button')
        const img = screen.getByRole('img')
        const list = screen.queryAllByRole('list')
    expect(figure.length).toBeGreaterThan(0);
    figure.forEach(button=>{
        expect(button).toBeInTheDocument()
    })
    expect(img).toHaveAttribute('src', '/src/assets/sun.svg')
    list.forEach(l=>{
        expect(l).toBeInTheDocument()
      
    })
    await user.click(figure[0])
    expect(img).toHaveAttribute('src', '/src/assets/moon.svg')
    })




})