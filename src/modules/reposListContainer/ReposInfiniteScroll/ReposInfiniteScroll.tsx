import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './OffersInfiniteScroll.module.css';

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
            loader={<h3> Loading...</h3>}
            endMessage={<h4 className={styles.jobOffers__noMoreJobOffersHeader}>Nothing more to show</h4>}
            className={styles.jobOffers__scrollElement}
            scrollableTarget="scrolledOfferList"
        >
            {children}
        </InfiniteScroll>
    );
}
