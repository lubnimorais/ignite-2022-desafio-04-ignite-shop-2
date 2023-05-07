import { HTMLAttributes } from 'react';
import { ProductSkeletonContainer, SkeletonItem } from './styles';

interface IProductSkeletonProps extends HTMLAttributes<HTMLDivElement> { }

export function ProductSkeleton({ ...props }: IProductSkeletonProps) {
  return (
    <ProductSkeletonContainer {...props}>
      <SkeletonItem />
      <div>
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </ProductSkeletonContainer>
  );
}
