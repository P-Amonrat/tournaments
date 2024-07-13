import { Space, theme, Typography } from "antd";
import { indexOf, isArray } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { TiltButton } from "~/components/common";
const { Text } = Typography;
const { useToken } = theme;

interface TiltCheckProps {
  fieldName: string;
  labelKey?: string;
  labelValue?: string;
  multiple?: boolean;
  options: any[];
  initialValues?: any;
  onSelect: (name: string, values: any) => void;
}

export function TiltCheck(props: TiltCheckProps) {
  const {
    fieldName,
    labelKey,
    labelValue,
    multiple,
    options,
    onSelect,
    initialValues,
  } = props;
  const [values, setValues] = useState<any>(initialValues);
  const { token } = useToken();

  const isActive = useCallback(
    (value: string | number) => {
      if (multiple) {
        return indexOf(values, `${value}`) > -1 || indexOf(values, value) > -1;
      } else {
        return values === value;
      }
    },
    [values]
  );

  const handleClicked = useCallback(
    (value: number | string) => {
      let newValues: any;
      if (multiple) {
        newValues = [];
        if (values && isArray(values)) {
          newValues = [...values];
        }
        let existedIndex = indexOf(values, value);
        if (existedIndex < 0) {
          existedIndex = indexOf(values, `${value}`);
        }
        if (existedIndex > -1) {
          newValues.splice(existedIndex, 1);
        } else {
          newValues.push(value);
        }
      } else {
        if (`${values}` === `${value}`) {
          newValues = null;
        } else {
          newValues = value;
        }
      }
      onSelect(fieldName, newValues);
      setValues(newValues);
    },
    [onSelect, values]
  );

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  return (
    <Space wrap size={5} style={{ display: "flex" }}>
      {options.map((option: any, index: number) => (
        <TiltButton
          color={
            isActive(option[labelValue ? labelValue : "id"])
              ? "primary"
              : "transparent"
          }
          key={`${fieldName}-${option[labelValue ? labelValue : "id"]}`}
          onClick={() => handleClicked(option[labelValue ? labelValue : "id"])}
          style={{
            borderColor: token.colorBorder,
            fontStyle: "italic",
            fontWeight: 400,
            paddingBlock: 6,
          }}
        >
          <Text>{option[labelKey ? labelKey : "label"]}</Text>
        </TiltButton>
      ))}
    </Space>
  );
}
