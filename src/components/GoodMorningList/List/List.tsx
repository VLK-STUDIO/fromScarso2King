import React, { useMemo } from "react";
import { Col } from "react-grid-system";
import { Box, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { GoodMorning } from "../../../types";
import { GoodMorningBox } from "../../GoodMorningBox";

type Props = {
  goodMornings: GoodMorning[];
  isLoading?: boolean;
};

const boxColStyle: React.CSSProperties = {
  height: "436px",
  marginBottom: "30px",
};

const emptyStateContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const emptyStateStyle: React.CSSProperties = {
  marginTop: "30px",
  marginBottom: "30px",
};

export const List: React.FC<Props> = ({ goodMornings, isLoading }) => {
  const list = useMemo(() => {
    return goodMornings.map((goodMorning) => (
      <Col key={goodMorning.id} sm={6} style={boxColStyle}>
        <GoodMorningBox goodMorning={goodMorning} />
      </Col>
    ));
  }, [goodMornings]);

  const emptyState = useMemo(() => {
    return (
      <Col sm={12} style={emptyStateStyle}>
        <Box style={emptyStateContainerStyle}>
          {isLoading ? (
            <FontAwesomeIcon
              icon={faCircleNotch}
              size="10x"
              spin
              opacity={0.5}
            />
          ) : (
            <Text fontFamily="sans-serif">
              Ancora nessun buongiornissimo 🙁
            </Text>
          )}
        </Box>
      </Col>
    );
  }, [isLoading]);

  return <>{goodMornings.length ? list : emptyState}</>;
};
