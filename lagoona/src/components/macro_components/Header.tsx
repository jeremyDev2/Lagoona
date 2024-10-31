import Logo from '../micro_components/Logo';
import PhoneNumber from '../micro_components/PhoneNumber';
import YellowLinks from '../micro_components/YellowLinks';
import Navigation from '../micro_components/Navigation';
import NavItem from '../micro_components/NavItem';
import YellowButton from '../micro_components/YellowButton';

const Header = () => (

    <header>
        <div className='container'>
            <div className='top-header flex'>
                <Logo />
                <PhoneNumber number='1-673-470-4743' />
                <YellowLinks text='Account' className='personal-account flex' />
            </div>

            <div className='navigation flex'>
                <Navigation NavclassName='navbar-block flex' UlclasName='navbar-list list-reset flex'>
                    <NavItem text='About' url='#about' />
                    <NavItem text="Services" url="#srv" />
                    <NavItem text="Benefits" url="#bnf" />
                    <NavItem text="Accommodation" url="#pst" />
                    <NavItem text="Blog" url="#blg" />
                    <NavItem text="Contacts" url="#contacts-board" />
                </Navigation>

                <div className='block-button flex'>
                    <YellowButton text='Want a tour' className='first-navbutton' url='#' />
                    <YellowButton text='Call us' className='second-navbutton' url='#' />
                </div>
            </div>
        </div>
    </header>
);

export default Header