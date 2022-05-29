import { ralphImages } from '../assets/ralph-images';
import Ralph from './Ralph';
import { RiddleContainer, RiddleSubtext, RiddleText } from './styles';

export const StageTwo = () => {
  return (
    <RiddleContainer>
      {ralphImages.map((src, index) => {
        const alt = `ralph-on-the-table-${index + 1}`;
        return <Ralph key={alt} src={src} alt={alt} />;
      })}
      <RiddleText>
        What is Ralph's classic last tune to finish the dance off?
      </RiddleText>
      <RiddleSubtext>DM @thatsnang to submit your answer</RiddleSubtext>
    </RiddleContainer>
  );
};
