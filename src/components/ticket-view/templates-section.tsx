import { useTranslation } from 'react-i18next';
import { Box, Button, Flex, Heading, HStack, Icon, Tooltip } from '@chakra-ui/react';
import { useRootDispatch, useRootSelector } from '../../redux';
import TemplateEntryCard from './template-entry-card';
import {
    addTemplate,
    removeTemplate,
    setTemplateLineById,
    setTemplateLineNameById,
    setTemplateMajorFlagById,
    setTemplateNewLineById,
    setTemplateParamById,
} from '../../redux/ticket/ticket-slice';
import { MdAdd, MdHelp } from 'react-icons/md';

export default function TemplatesSection() {
    const { t } = useTranslation();

    const dispatch = useRootDispatch();
    const { templateList } = useRootSelector(state => state.app);
    const { company, templates } = useRootSelector(state => state.ticket);

    const handleLineChange = (entryId: string, line: string) => {
        const existingTemplate = templateList[company]?.find(entry => entry.filename === line);
        dispatch(setTemplateLineById({ id: entryId, line, name: existingTemplate?.name }));
    };

    return (
        <Box as="section" mt={3}>
            <Flex>
                <Heading as="h5" size="sm" mb={2}>
                    {t('Add or update templates')}
                </Heading>
                <Tooltip
                    hasArrow
                    label={t(
                        "Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it."
                    )}
                >
                    <span>
                        <Icon as={MdHelp} ml={1} />
                    </span>
                </Tooltip>
            </Flex>

            {templates.map(entry => (
                <TemplateEntryCard
                    key={entry.id}
                    company={company}
                    templateEntry={entry}
                    onLineChange={line => handleLineChange(entry.id, line)}
                    onNewLineChange={newLine => dispatch(setTemplateNewLineById({ id: entry.id, newLine }))}
                    onMajorFlagChange={majorUpdate => dispatch(setTemplateMajorFlagById({ id: entry.id, majorUpdate }))}
                    onLineNameChange={(lang, name) => dispatch(setTemplateLineNameById({ id: entry.id, lang, name }))}
                    onParamChange={param => dispatch(setTemplateParamById({ id: entry.id, param }))}
                    onRemove={() => dispatch(removeTemplate(entry.id))}
                />
            ))}

            <HStack justifyContent="flex-end">
                <Button variant="ghost" size="sm" leftIcon={<MdAdd />} onClick={() => dispatch(addTemplate())}>
                    {t('Add item')}
                </Button>
            </HStack>
        </Box>
    );
}
