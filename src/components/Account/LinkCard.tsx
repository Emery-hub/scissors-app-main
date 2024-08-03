import React from 'react';
import { Button } from 'flowbite-react';
import Container from '../../shared/container';

interface LinkCardProps {
  id: string | number;
  createdAt: string;
  name: string;
  longURL: string;
  shortCode: string;
  totalClicks: number;
}

const LinkCard = ({
  id,
  createdAt,
  name,
  longURL,
  shortCode,
  totalClicks,
}: LinkCardProps) => {
  return (
    <Container>
      <h1>Hello</h1>

      <div className="flex justify-between items-center">
        <div>
          <h4>Created at {createdAt}</h4>
          <div className="my-3">
            <h2>Name: {name}</h2>
            <h4>Long URL: {longURL}</h4>
          </div>
          <div className="flex gap-2">
            <h4>
              {window.location.host}/{shortCode}
            </h4>
            <Button>Copy</Button>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h4>Total Clicks: {totalClicks}</h4>
              {/* put icon image here */}
            </div>
            <h4>Total Clicks</h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LinkCard;
