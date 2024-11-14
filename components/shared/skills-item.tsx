import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui';
interface Props {
  imageUrl: string;
  name: string;
  className?: string;
}

export const SkillsItem: React.FC<Props> = ({ imageUrl, name }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-[50px] h-[50px] rounded-md overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};
