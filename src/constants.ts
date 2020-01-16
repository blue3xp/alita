/**
 * Copyright (c) Areslabs.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
 
export const InnerComponentNamePrefix = "ICNP" // inner component name prefix

export const InnerTemplateNamePrefix = "ITNP" // inner template name prefix

export const ChildTemplateDataKeyPrefix = "CTDK" // inner spread attribute prefix

export const ChildTemplateNamePrefix = "CTNP"

export const RNCOMPSET = new Set([
    'Button',
    'FlatList',
    'Modal',
    'Picker',
    'PickerItem',
    'RefreshControl',
    'ScrollView',
    'SectionList',
    'Slider',
    'Switch',
    'TextInput',
    'WebView',


    /** 退化为view的基本组件
    'Image',
    'Text',
    'TextInner',
    'View',
    'TouchableHighlight',
    'TouchableOpacity',
    'TouchableWithoutFeedback',
    */
])