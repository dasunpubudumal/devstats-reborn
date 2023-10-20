import {
  Box,
  Text,
  Heading,
  Stack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { StatsPageWrapper } from "./StatsPageWrapper";

export const GitHubPage = () => {
  return (
    <>
      <StatsPageWrapper heading={<Heading>GitHub Profile</Heading>}>
        <Stack spacing={5} sx={{ "text-align": "justify" }}>
          <Text>
            You can add personal information about yourself in your bio, like
            previous places you've worked, projects you've contributed to, or
            interests you have that other people may like to know about. For
            more information, see "Personalizing your profile." If you add a
            README file to the root of a public repository with the same name as
            your username, that README will automatically appear on your profile
            page. You can edit your profile README with GitHub Flavored Markdown
            to create a personalized section on your profile. For more
            information, see "Managing your profile README."
          </Text>
          <Text>
            People who visit your profile see a timeline of your contribution
            activity, like issues and pull requests you've opened, commits
            you've made, and pull requests you've reviewed. You can choose to
            display only public contributions or to also include private,
            anonymized contributions. For more information, see "Viewing
            contributions on your profile" or "Showing your private
            contributions and achievements on your profile."
          </Text>
          <UnorderedList>
            <ListItem>
              Repositories and gists you own or contribute to. You can showcase
              your best work by pinning repositories and gists to your profile.
              For more information, see "Pinning items to your profile."
            </ListItem>
            <ListItem>
              Repositories you've starred and organized into lists. For more
              information, see "Saving repositories with stars."
            </ListItem>
            <ListItem>
              An overview of your activity in organizations, repositories, and
              teams you're most active in. For more information, see "Showing an
              overview of your activity on your profile."
            </ListItem>
            <ListItem>
              Badges and Achievements that highlight your activity and show if
              you use GitHub Pro or participate in programs like the Arctic Code
              Vault, GitHub Sponsors, or the GitHub Developer Program. For more
              information, see "Personalizing your profile."
            </ListItem>
            <ListItem>
              Your pronouns if you've set them. For more information, see
              "Personalizing your profile.
            </ListItem>
            <ListItem>
              Mutual connections you share with someone who is viewing your
              profile. The person viewing your profile can see which of the
              people they follow are also followed by you.
            </ListItem>
          </UnorderedList>
        </Stack>
      </StatsPageWrapper>
    </>
  );
};
