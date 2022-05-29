import { HintText, StageContainer, StageNumber, StageNumbers } from './styles';

export const Stages = ({
  isStageOne,
  setIsStageOne,
}: {
  readonly isStageOne: boolean;
  readonly setIsStageOne: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onStageOneClick = () => {
    setIsStageOne(true);
  };

  const onStageTwoClick = () => {
    setIsStageOne(false);
  };
  return (
    <StageContainer>
      <StageNumbers>
        <StageNumber onClick={onStageOneClick} selected={isStageOne}>
          1
        </StageNumber>
        <StageNumber onClick={onStageTwoClick} selected={!isStageOne}>
          2
        </StageNumber>
      </StageNumbers>
      {isStageOne ? (
        <HintText>
          Slide the blocks to complete the image and unlock stage 2
        </HintText>
      ) : (
        <HintText>
          Click on the image to reveal the riddle and a chance to win big
        </HintText>
      )}
    </StageContainer>
  );
};
