import 'animate.css';
import { ReposListItemIndex } from './ReposListItemIndex/ReposListItemIndex';
import { ReposListItemName } from './ReposListItemName/ReposListItemName';
import { ReposListItemOwner } from './ReposListItemOwner/ReposListItemOwner';
import { ReposListItemContainer } from './ReposListItemContainer/ReposListItemContainer';

interface ReposListItemProps {
    index: number;
    name: string;
    url: string;
    owner: string;
}

export const ReposListItem = ({ index, name, url, owner}: ReposListItemProps) => {
    return (
        <ReposListItemContainer>
            <ReposListItemIndex index={index} />
            <ReposListItemName name={name} url={url} />
            <ReposListItemOwner owner={owner} />
        </ReposListItemContainer>
    );
}
