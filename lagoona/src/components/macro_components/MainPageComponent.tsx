import SpecialOffers from '../micro_components/SpecialOffers';
import About from '../micro_components/About';
import ServiceComponent from '../micro_components/ServiceComponent';
import BenefitsComponent from '../micro_components/BenefitsComponent';
import HotelCardListComponent from '../micro_components/HotelCardListComponent';
import WannaTour from '../micro_components/WannaTour';
import ContactsBoard from '../micro_components/Contacts';

const MainPageComponent = () => {
    return (
        <main>
            <h1 className='visually-hidden'>Laguna - luxury hotel chain</h1>
            <SpecialOffers />
            <About title='About Us' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet est nisl. Pellentesque magna orci, mattis ut lectus sit amet, euismod porttitor massa. Etiam ex lorem, egestas ut ante in, tristique hendrerit neque. Nullam accumsan est sit amet bibendum posuere. Morbi rhoncus tellus in turpis tristique, ac condimentum nulla euismod. Vivamus eu felis eget diam tristique mollis quis id massa. Fusce varius, eros a luctus tincidunt, magna ex pellentesque metus, sit amet consequat est magna eu erat. Nullam lorem magna, scelerisque sed facilisis sed, faucibus sollicitudin justo. Sed convallis nec purus sed aliquet. Phasellus eget tortor ut diam ornare tristique.' />
            <ServiceComponent />
            <BenefitsComponent />
            <HotelCardListComponent />
            <WannaTour />
            <ContactsBoard />
        </main>
    );
}

export default MainPageComponent;