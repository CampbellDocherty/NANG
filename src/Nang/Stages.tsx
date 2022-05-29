import { HintText, StageContainer, StageNumber, StageNumbers } from './styles';

export const Stages = ({
  isStageOne,
  setIsStageOne,
  stageOneComplete,
  stageOnePreviouslyCompleted,
}: {
  readonly isStageOne: boolean;
  readonly setIsStageOne: React.Dispatch<React.SetStateAction<boolean>>;
  readonly stageOneComplete: boolean;
  readonly stageOnePreviouslyCompleted: boolean;
}) => {
  const onStageOneClick = () => {
    setIsStageOne(true);
  };

  const onStageTwoClick = () => {
    if (stageOneComplete || stageOnePreviouslyCompleted) {
      setIsStageOne(false);
    }
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
        stageOneComplete || stageOnePreviouslyCompleted ? (
          <HintText>
            You've completed stage 1, when you want click 2 to move on
          </HintText>
        ) : (
          <HintText>
            Slide the blocks to complete the image and unlock stage 2
          </HintText>
        )
      ) : (
        <HintText>
          Click on the image to reveal the riddle and a chance to win big
        </HintText>
      )}
    </StageContainer>
  );
};
