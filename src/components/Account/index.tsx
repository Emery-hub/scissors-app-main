import { useState } from 'react';
import { Button } from 'flowbite-react';
import Container from '../../shared/container';
import LinkCard from './LinkCard';

interface LinkCardProps {
  id: string | number;
  createdAt: string; // Update the type to string
  name: string;
  longURL: string;
  shortCode: string;
  totalClicks: number;
}

const dummyData: LinkCardProps[] = [
  {
    id: '31r08ms0fam',
    createdAt: new Date().toDateString(),
    name: 'Dummy name',
    longURL: 'http://www.google.com',
    shortCode: 'masdom',
    totalClicks: 312,
  },
  {
    id: '31r08857ms0fam',
    createdAt: new Date().toDateString(),
    name: 'Dummy name 2',
    longURL: 'http://www.google.com',
    shortCode: 'masdom-real',
    totalClicks: 512,
  },
  {
    id: '31r08476757ms0fam',
    createdAt: new Date().toDateString(),
    name: 'Dummy name 3',
    longURL: 'http://www.google.com',
    shortCode: 'masdom-real',
    totalClicks: 212,
  },
];

const Account = () => {
  const [links, setLinks] = useState(dummyData);
  return (
    <Container>
      <div className="flex items-center justify-left mt-6 gap-4">
        <h1>Links</h1>
        <Button>Create new</Button>
      </div>

      <div>
        {links.map((link) => (
          <LinkCard key={link.id} {...link} />
        ))}
      </div>
    </Container>
  );
};

export default Account;
