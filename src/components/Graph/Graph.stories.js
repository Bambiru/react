import Graph from './Graph';

const metaConfig = {
  title: 'components/Graph',
  component: Graph,
  tags: ['autodocs'],
};
export default metaConfig;

export const Base = {
  args: {
    start: 0,
    end: 5,
  },
};
Base.storyName = '1-5까지 그래프';
