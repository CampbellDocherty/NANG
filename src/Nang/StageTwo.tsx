import { ralphImages } from '../assets/ralph-images';
import Ralph from './Ralph';
import {
  RalphContainer,
  RiddleContainer,
  RiddleSubtext,
  RiddleText,
} from './styles';

export const StageTwo = () => {
  return (
    <RalphContainer>
      {ralphImages.map((src, index) => {
        const alt = `ralph-on-the-table-${index + 1}`;
        return <Ralph key={alt} src={src} alt={alt} />;
      })}
      <RiddleContainer>
        <RiddleText>
          What is Ralph's classic last tune to finish the dance off?
        </RiddleText>
        <RiddleSubtext>DM @thatsnang to submit your answer.</RiddleSubtext>

        <RiddleSubtext>
          First 5 correct answers get a free double from Ralph himself!
        </RiddleSubtext>
      </RiddleContainer>
    </RalphContainer>
  );
};
