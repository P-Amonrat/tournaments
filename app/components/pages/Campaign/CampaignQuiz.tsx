import { Card, Col, Flex, Row, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const { Title } = Typography;

interface CampaignQuizProps {
  onSubmit: (values: any) => void;
}

export function CampaignQuiz(props: CampaignQuizProps) {
  const { onSubmit } = props;
  const { t } = useTranslation();
  const [step, setStep] = useState<number>(0);
  const [values, setValues] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const questions = [
    {
      choices: [
        {
          label: "เล่นคนเดียว",
          value: 0,
        },
        {
          label: "เล่นกับเพื่อน",
          value: 1,
        },
      ],
    },
    {
      choices: [
        {
          label: "เน้นผล",
          value: 0,
        },
        {
          label: "เน้นโยน",
          value: 1,
        },
      ],
    },
    {
      choices: [
        {
          label: "ปืน",
          value: 0,
        },
        {
          label: "Spike",
          value: 1,
        },
      ],
    },
    {
      choices: [
        {
          label: "จีบก่อน",
          value: 0,
        },
        {
          label: "โดนจีบ",
          value: 1,
        },
      ],
    },
    {
      label:
        "Q5 : Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      choices: [
        {
          label: "ดำด้าน",
          value: 0,
        },
        {
          label: "ดำเงา",
          value: 1,
        },
      ],
    },
  ];

  const handleSelect = useCallback(
    (value: number) => {
      const newValues = `${values}${value.toString()}`;
      setValues(newValues);
      setStep((prev: number) => prev + 1);
      if (step == 4) {
        onSubmit(newValues);
      }
    },
    [values]
  );

  useEffect(() => {
    const userAgent = navigator.userAgent || "";

    // Check for common patterns in the userAgent string to determine device type
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

    setIsMobile(isMobile);
  }, []);

  return values.length < 5 ? (
    <Card
      bordered={false}
      style={{
        position: "relative",
        maxWidth: 800,
        width: "80%",
        marginInline: "auto",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundImage: `url('/image/campaign-background-1.png')`,
        backgroundSize: "cover",
        borderRadius: 30,
      }}
      bodyStyle={{
        paddingBlock: !isMobile ? 120 : 70,
        paddingInline: "6%",
      }}
    >
      <Flex vertical justify="center" gap={10} style={{ textAlign: "center" }}>
        <Title
          style={{
            margin: 0,
            color: "inherit",
            fontFamily: "A4SPEED",
            fontSize: !isMobile ? 50 : 35,
          }}
          level={1}
        >
          {`${t("Question")} ${step + 1}`}
        </Title>
        <Row gutter={[50, 30]} style={{ marginTop: !isMobile ? 40 : 3 }}>
          <Col span={24} md={12}>
            <Flex
              align="center"
              justify="center"
              style={{
                minHeight: !isMobile ? 200 : 150,
                borderRadius: 20,
                backgroundImage: "url('/image/choice-a.jpg')",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                cursor: "pointer",
              }}
              onClick={() => handleSelect(0)}
            >
              <Title
                style={{
                  margin: 0,
                  // fontFamily: "A4SPEED",
                  color: "#fff",
                }}
                level={1}
              >
                {questions[step].choices[0].label}
              </Title>
            </Flex>
          </Col>
          <Col span={24} md={12}>
            <Flex
              align="center"
              justify="center"
              style={{
                minHeight: !isMobile ? 200 : 150,
                borderRadius: 20,
                backgroundImage: "url('/image/choice-b.jpg')",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                cursor: "pointer",
              }}
              onClick={() => handleSelect(1)}
            >
              <Title
                style={{
                  margin: 0,
                  // fontFamily: "A4SPEED",
                  color: "#fff",
                }}
                level={1}
              >
                {questions[step].choices[1].label}
              </Title>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </Card>
  ) : (
    <></>
  );
}
