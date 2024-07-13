import { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  DatePicker,
  Divider,
  Form,
  Input,
  Space,
  theme,
  Typography,
} from "antd";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { InlineAvatar, TiltButton } from "~/components/common";
import { AuthContext } from "~/contexts";
import { useMatches } from "@remix-run/react";
import dayjs from "dayjs";

const { useToken } = theme;
const { Text, Title } = Typography;

interface TournamentTeamMemberFormProps {
  currentTeam?: any;
  loading?: boolean;
  isDiscordIdRequired: boolean;
  isEmailRequired: boolean;
  isPhoneNumberRequired: boolean;
  isIgnRequired: boolean;
  additionalFields?: any;
  onBack?: (e: any) => void | undefined;
  team: any;
  onSubmit: (values: any) => void;
  submitLabel: string;
}

export function TournamentTeamMemberForm(props: TournamentTeamMemberFormProps) {
  const { t } = useTranslation();
  const {
    isDiscordIdRequired,
    isEmailRequired,
    isPhoneNumberRequired,
    isIgnRequired,
    additionalFields,
    loading,
    onBack,
    onSubmit,
    submitLabel,
    team,
    currentTeam,
  } = props;
  const [form] = Form.useForm();
  const { token } = useToken();
  const { user } = useContext(AuthContext);
  const matches = useMatches();
  const { cdnUrl } = matches[0].data;

  let userMemberData = null as any;
  let initialData = null as any;
  if (currentTeam) {
    userMemberData = currentTeam.members.find(
      (member: any) => member.userId === user.id
    );
    initialData = userMemberData;
  }

  // const handleSubmitForm = useCallback(
  //   (values: any) => {
  //     if (needSubmitKyc && values.acceptWhalletConsent) {
  //       onSubmit("submit-kyc", values);
  //     } else if (!team.id) {
  //       onSubmit("create-team", { ...values, ...team });
  //     } else if (myTeamMember) {
  //       onSubmit("update-team-member", { ...values, id: myTeamMember.id });
  //     } else {
  //       onSubmit("join-team", { ...values, teamId: team.id });
  //     }
  //   },
  //   [team]
  // );

  const handleSubmitForm = (values: any) => {
    // Extract values from form fields
    const { email, phoneNumber, discordId, ign, ...additionalFields } = values;

    // Create customfields array with name and value pairs
    const customFields = Object.entries(additionalFields).map(
      ([name, value]) => ({
        name,
        value,
      })
    );

    // Prepare the final data object to be submitted
    const formData = {
      email,
      phoneNumber,
      discordId,
      ign,
      customFields,
    };

    // Call the onSubmit function with the formatted data
    onSubmit(formData);
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmitForm}
      initialValues={initialData ? initialData : null}
      layout="vertical"
    >
      {onBack && (
        <Space
          size={5}
          style={{ cursor: "pointer", marginBottom: 20 }}
          onClick={onBack}
        >
          <ArrowLeftOutlined />
          <Text>{t("back to edit team")}</Text>
        </Space>
      )}
      <Title level={4} style={{ margin: 0 }}>
        {t("player info")}
      </Title>
      <Divider style={{ marginBlock: 15 }} />
      <Title level={5}>Team Name</Title>
      <Card
        bordered={false}
        style={{ backgroundColor: token.colorBgBase, marginBottom: 15 }}
        bodyStyle={{ padding: 10 }}
      >
        <InlineAvatar
          avatarUrl={`${cdnUrl}/${team?.logo}`}
          title={team?.name}
          subtitle={
            team?.createdBy ? (
              <Text>{`${t("by")} ${team?.createdBy.username}`}</Text>
            ) : null
          }
        />
      </Card>
      <Form.Item
        name="email"
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("email")}
          </Text>
        }
        initialValue={
          user?.profile.profileEmail ? user.profile.profileEmail : null
        }
        rules={
          submitLabel === "Create Team" ||
          submitLabel === "สร้างทีม" ||
          isEmailRequired
            ? [
                {
                  required: true,
                  message: `${t("please input email")}`,
                },
              ]
            : []
        }
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        initialValue={
          user?.profile.profilePhoneNumber
            ? user.profile.profilePhoneNumber
            : null
        }
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("phone number")}
          </Text>
        }
        rules={
          submitLabel === "Create Team" ||
          submitLabel === "สร้างทีม" ||
          isPhoneNumberRequired
            ? [
                {
                  required: true,
                  message: `${t("please input phone")}`,
                },
              ]
            : []
        }
      >
        <Input type="tel" />
      </Form.Item>
      <Form.Item
        name="discordId"
        initialValue={user?.profile.discordId ? user.profile.discordId : null}
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("discord id")}
          </Text>
        }
        rules={
          isDiscordIdRequired
            ? [
                {
                  required: true,
                  message: `${t("please input discord id")}`,
                },
              ]
            : []
        }
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="ign"
        label={
          <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
            {t("game username")}
          </Text>
        }
        rules={
          isIgnRequired
            ? [
                {
                  required: true,
                  message: `${t("please input game username")}`,
                },
              ]
            : []
        }
      >
        <Input />
      </Form.Item>
      {additionalFields &&
        additionalFields.length > 0 &&
        additionalFields.map((field: any, index: number) => (
          <Form.Item
            key={field.name}
            name={field.name}
            initialValue={
              initialData
                ? field.type === "date"
                  ? dayjs(initialData.customFields[index]?.value)
                  : initialData.customFields[index]?.value
                  ? initialData.customFields[index]?.value
                  : null
                : null
            }
            rules={[
              {
                required: field.isRequired,
                message: `${t("please input data")}`,
              },
            ]}
            label={
              <Text style={{ fontWeight: 600, fontSize: "inherit" }}>
                {t(field.name)}
              </Text>
            }
          >
            {field.type === "date" ? (
              <DatePicker
                showToday={false}
                allowClear
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                style={{ display: "flex" }}
              />
            ) : (
              <Input />
            )}
          </Form.Item>
        ))}
      {loading ? (
        <TiltButton color="secondary">
          <LoadingOutlined style={{ fontSize: 24 }} spin />
        </TiltButton>
      ) : (
        <TiltButton
          color="primary"
          onClick={() => form.submit()}
          style={{ marginTop: 20 }}
        >
          {submitLabel}
        </TiltButton>
      )}
    </Form>
  );
}
