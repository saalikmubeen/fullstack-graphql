import { Suggestion } from '@fullstack-graphql/shared';
import * as React from 'react';

export interface RightBarWhoToFollowListProps {
  suggestions: Suggestion[];
}

const RightBarWhoToFollowList: React.FC<RightBarWhoToFollowListProps> = ({
  suggestions,
}) => {
  return (
    <section>
      <header>
        <h3>Who to follow</h3>
        <a href="#" onClick={(e) => e.preventDefault()}>
          View All
        </a>
      </header>
      <main>
        {suggestions.map((suggestion, index) => {
          const { name, handle, avatarUrl, reason } = suggestion;
          return (
            <a href="#" onClick={(e) => e.preventDefault()} key={index}>
              <img src={avatarUrl} />
              <div className="user">
                <p>
                  {name}
                  <b>
                    <small>@{handle}</small>
                  </b>
                </p>
                <span>{reason}</span>
              </div>
            </a>
          );
        })}
      </main>
    </section>
  );
};

export default RightBarWhoToFollowList;
