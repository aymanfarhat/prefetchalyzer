/**
 * Copyright 2020 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 **/

import { Page } from './page'
import { Resource } from './resource'

export interface AppState {
    // global state: has a parsed HAR file
    hasData: boolean;
    activeView: AppView;
}

// used to transfer parsed HAR data from FileUpload to App
export interface ParsedHAR {
    pages: Page[];
    resources: Resource[];
}

export type AppView = 'import' | 'about' | 'prefetch_opps'

export type JsonObject = Record<string, any>;

export interface AppTab {
    // reference to connected view
    key: AppView;
    // text shown on tab
    label: string;
    // whether displaying this tab requires HAR data to be available
    requiresData: boolean;
}
