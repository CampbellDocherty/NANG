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
        <RiddleText>Finish off this NANG stap line 'under the...'</RiddleText>
        <RiddleSubtext>DM @thatsnang to submit your answer.</RiddleSubtext>
        <RiddleSubtext>First 5 correct answers get a free drink!</RiddleSubtext>
      </RiddleContainer>
    </RalphContainer>
  );
};
