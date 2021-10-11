import InfiniteScroll from 'react-infinite-scroll-component';
import CircleLoaderContainer from '../../circleLoaderContainer/CircleLoaderContainer';

interface ReposInfiniteScrollProps {
    children: React.ReactNode,
    dataLength: number,
    nextReposFunc: () => void,
    hasMore: boolean
}

export const ReposInfiniteScroll = ({ children, dataLength, nextReposFunc, hasMore }: ReposInfiniteScrollProps) => {
    return (
        <InfiniteScroll
            dataLength={dataLength}
            next={nextReposFunc}
            hasMore={hasMore}
            loader={<CircleLoaderContainer text="Wait for repositories..."/>}
            endMessage={<h4>Nothing more to show</h4>}
            scrollableTarget="scrolledOfferList"
        >
            {children}
        </InfiniteScroll>
    );
}
