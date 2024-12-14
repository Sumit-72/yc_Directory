import React from 'react';
import Ping from './ping';
import { client } from '@/sanity/lib/client';
import { STARTUP_VIEW_QUERY } from '@/sanity/lib/query';
import { writeClient } from '@/sanity/lib/write-client';

const View = async ({ id }: { id: string }) => {
    // Fetch the current view count
    const result = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEW_QUERY, { id });
    const totalViews = result.views;
    
    // Update the view count immediately after fetching the data
    await writeClient.patch(id).set({ views: totalViews + 1 }).commit();

    return (
      <div className="view-container">
        <div className="absolute -top-2 -right-2">
          <Ping />
        </div>

        <p className="view-text">
          <span className="font-black">Views: {totalViews + 1}</span>
        </p>
      </div>
    );
};

export default View;

